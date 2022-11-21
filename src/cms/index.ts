import { HomeData, Project, ProjectPreviewData } from "./types";

const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN;

async function fetchCmsAPI(
    query: string,
    { variables }: { variables?: Record<string, any> } = {}
) {
    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${API_TOKEN}`,
            },
            body: JSON.stringify({
                query,
                variables,
            }),
        });

        const json = await res.json();
        return json.data;

    } catch (error) {
        console.log(error)
        return undefined;
    }

}

export async function getAllProjects(): Promise<ProjectPreviewData[]> {
    const data = await fetchCmsAPI(`
     {
        allProjects (orderBy: order_DESC) {
            id
            alias
            title
            order
            thumbnail {
                basename
                height
                url
                width
            }
        }
    }
    `);

    return data.allProjects;
}

export async function getAllProjectsAlias(): Promise<string[]> {
    const data = await fetchCmsAPI(`
    {
        allProjects (orderBy: order_DESC) {
            alias
        }
    }`);
    
    return data.allProjects;
}

export async function getProjectDetail(alias: string): Promise<{ project: Project, allProjects: { alias: string }[] }> {
    const data = await fetchCmsAPI(`  
    query ProjectData ($alias: String!) {
        project(filter: {alias: {eq: $alias}}) {
            id
            alias
            title
            subtitle
            periode
            order
            wip
            description
            client
            projecttype
            role
            githubLink
            link
            linkFavicon {
                basename
                height
                url
                width
            }
            screenshots {
                basename
                height
                url
                width
            }
            technologies {
                id
                label
                logo {
                    basename
                    height
                    url
                    width
                }
            }
        }
        allProjects {
            alias
        }
    }`,
    { variables: { alias } });
    return data;
}

export async function getHome(): Promise<HomeData> {
    const data = await fetchCmsAPI(`
     {
        home {
            resume {
              url
            }
            featuredProjects {
              id
              alias
              order
              title
              thumbnail {
                url
                width
                height
                basename
              }
            }
            academic {
              id
              period
              title
              description
            }
            professional {
              id
              description
              period
              title
            }
        }
    }
    `);

    return data.home;
}



