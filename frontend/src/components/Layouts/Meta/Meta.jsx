import { Helmet } from 'react-helmet';

const Meta = ({ title }) => {
    return (
        <Helmet>
            <title>{title} - Now</title>
            <meta name="description" content="Now, Home : Chat anywhere, Anytime Seamlessly" />
        </Helmet>
    );
}

export default Meta;
