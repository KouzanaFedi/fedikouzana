import { DefaultSeoProps } from 'next-seo';

export const defaultValues = {
    title: 'Fedi <KOUZANA/> | Full Stack web developer',
    templateTitle: 'Fedi <KOUZANA/> |',
    description: 'Fedi Kouzana a Full Stack web developer portfolio.',
    url: 'https://fedikouzana.vercel.app'
}

const config: DefaultSeoProps = {
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: defaultValues.url,
        siteName: defaultValues.title,
        description: defaultValues.description,
        title: defaultValues.title,
        images: [{
            alt: "Fedi <KOUZANA/>",
            url: "~/fedi-kouzana.png",
        }]
    },
    title: defaultValues.title,
    description: defaultValues.description,
    defaultTitle: defaultValues.title,
};

export default config;