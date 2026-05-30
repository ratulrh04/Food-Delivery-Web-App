const Page = async ({ params }) => {

    const data = await params;

    return (
        <div className="restuarant-page-banner">
            <h1>{decodeURIComponent(data.name)}</h1>
        </div>
    );
};

export default Page;