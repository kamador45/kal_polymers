import React, {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectGallery = () => {

    const [showingAll, setShowingAll] = useState(true);
    const [showCategories, setShowCategories] = useState<number>(0);


    const Cat1 = () => (
        <div className={"masonry-item cat-1 col-lg-4 col-md-6 col-sm-6 m-b30"}>
            <div className="project-img-effect-1">
                <Image src="/images/gallery/thumb/pic1.jpg" width={400} height={100} alt="" />
                <div className="wt-info">
                    <h3 className="wt-tilte m-b10 m-t0">Industry</h3>
                    <p>High Performance Services For Multiple Insdustries And Technologies!</p>
                </div>
            </div>
        </div>
    );

    const Cat2 = () => (
        <div className="masonry-item cat-2 col-lg-4 col-md-6 col-sm-6 m-b30">
            <div className="project-img-effect-1">
                <Image src="/images/gallery/thumb/pic2.jpg"  width={400} height={100} alt="" />
                <div className="wt-info">
                    <h3 className="wt-tilte m-b10 m-t0">Alternative Energy</h3>
                    <p>Committed to delivering high quality projects and innovate business.</p>
                </div>
            </div>
        </div>
    );

    const Cat3 = () => (
        <div className="masonry-item cat-3 col-lg-4 col-md-6 col-sm-6 m-b30">
            <div className="project-img-effect-1">
                <Image src="/images/gallery/thumb/pic4.jpg" width={400} height={100} alt="" />
                <div className="wt-info">
                    <h3 className="wt-tilte  m-b10 m-t0">Areb Oil Rigs</h3>
                    <p>High Performance Services For Multiple Insdustries And Technologies!</p>
                </div>
            </div>
        </div>
    );

    const Cat4 = () => (
        <div className={"masonry-item cat-1 col-lg-4 col-md-6 col-sm-6 m-b30"}>
            <div className="project-img-effect-1">
                <Image src="/images/gallery/thumb/pic1.jpg" width={400} height={100} alt="" />
                <div className="wt-info">
                    <h3 className="wt-tilte m-b10 m-t0">Industry</h3>
                    <p>High Performance Services For Multiple Insdustries And Technologies!</p>
                </div>
            </div>
        </div>
    );

    const Cat5 = () => (
        <div className="masonry-item cat-2 col-lg-4 col-md-6 col-sm-6 m-b30">
            <div className="project-img-effect-1">
                <Image src="/images/gallery/thumb/pic2.jpg"  width={400} height={100} alt="" />
                <div className="wt-info">
                    <h3 className="wt-tilte m-b10 m-t0">Alternative Energy</h3>
                    <p>Committed to delivering high quality projects and innovate business.</p>
                </div>
            </div>
        </div>
    );

    const Cat6 = () => (
        <div className="masonry-item cat-3 col-lg-4 col-md-6 col-sm-6 m-b30">
            <div className="project-img-effect-1">
                <Image src="/images/gallery/thumb/pic4.jpg" width={400} height={100} alt="" />
                <div className="wt-info">
                    <h3 className="wt-tilte  m-b10 m-t0">Areb Oil Rigs</h3>
                    <p>High Performance Services For Multiple Insdustries And Technologies!</p>
                </div>
            </div>
        </div>
    )

    //Components
    const components = [
        {
            id:1,
            identifier:1,
            htmlComponent:<Cat1/>
        },
        {
            id:2,
            identifier:2,
            htmlComponent:<Cat2/>
        },
        {
            id:3,
            identifier:1,
            htmlComponent:<Cat3/>
        },
        {
            id:4,
            identifier:2,
            htmlComponent:<Cat4/>
        },
        {
            id:5,
            identifier:3,
            htmlComponent:<Cat5/>
        },
        {
            id:5,
            identifier:3,
            htmlComponent:<Cat6/>
        }
    ]

    const hidding = (data_filter:number) => {
        console.log(data_filter);
        if(data_filter === 1) {
            setShowCategories(1)
        } else if (data_filter === 2) {
            setShowCategories(2)
        } else if (data_filter === 3) {
            setShowCategories(3)
        } else {
            setShowCategories(0)
        }
    }

    const showingAllItems = (data_filter) => {
        if(data_filter.target.attributes[0].localName === '*') {
            setShowingAll(true)
        }
    }


    return(
        <div className={"section-full p-t80 p-b50 bg-white"}>
            <div className={"container"}>
                <div className={"filter-wrap work-grid p-b30 text-center"}>
                    <ul className={"masonry-filter link-style"}>
                        <li className="active"><Link data-filter="*" href="#" onClick={() => hidding(0)}>All Projects</Link></li>
                        <li><Link data-filter=".cat-1" href="#" onClick={() => hidding(1)}>Chemical</Link></li>
                        <li><Link data-filter=".cat-2" href="#" onClick={() => hidding(2)}>Construction</Link></li>
                        <li><Link data-filter=".cat-3" href="#" onClick={() => hidding(3)}>Industrial</Link></li>
                        <li><Link data-filter=".cat-4" href="#" onClick={() => hidding(4)}>Agriculture</Link></li>
                    </ul>
                </div>

                <div className={"masonry-wrap mfp-gallery  row clearfix d-flex justify-content-center flex-wrap"}>
                    {
                        components.map((items) => (
                            <>
                                {
                                    showCategories === 0 && (
                                        items.htmlComponent
                                    )
                                }

                                {
                                    showCategories === items.identifier && (
                                        items.htmlComponent
                                    )
                                }
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectGallery;