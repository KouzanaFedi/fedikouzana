
export interface ImageData {
    basename: string;
    url: string;
    width: number;
    height: number;
}

export interface Technology {
    id: string;
    label: string;
    logo: ImageData;
}

export interface ProjectPreviewData {
    id: string;
    alias: string;
    title: string;
    thumbnail: ImageData;
}

export interface Project {
    id: string;
    alias: string;
    title: string;
    subtitle: string;
    description: string;
    wip: boolean;
    client: string;
    projecttype: string;
    role: string;
    periode: string;
    githubLink: string;
    link: string;
    linkFavicon: ImageData;
    thumbnail: ImageData;
    technologies: Technology[];
    screenshots: ImageData[];
}

export interface TimelineItem {
    id: string;
    description: string;
    period: string;
    title: string;
}

export interface HomeData {
    resume: {
        url: string;
    }
    featuredProjects: ProjectPreviewData[];
    academic: TimelineItem[];
    professional: TimelineItem[];
}