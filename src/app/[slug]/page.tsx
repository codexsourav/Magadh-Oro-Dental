import Fotter from "@/Components/Fotter/Fotter";
import Navbar from "@/Components/Navbar/Navbar";


function Blog(p: any) {
    const blog = p.params.slug;

    return (
        <>
            <Navbar />
            <div className="container">
                <br />
                <h1>This is blogger title here</h1>
                <br />
                <br />
                <div dangerouslySetInnerHTML={{ __html: "<h1>Hi there!</h1>" }} />
            </div>

            <Fotter />
        </>
    )
}
export default Blog;