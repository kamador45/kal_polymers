import Head from "next/head";
import React, {useEffect} from "react";


const MainLayout = ({children, title}) => {
    return(
        <>
            <Head>
                <title>Kal-Polymers | {title}</title>
                <meta name={'author'} content={'Kal-Polymers'} />
                <meta name={'description'} content={'Kal-Polymers website'} />
                <meta name={'keyword'} content={'Kal, Polymers, Plastic'}/>
            </Head>
            <main className={"page-wraper"} key={1}>
                <div className={"page-content"}>
                    {children}
                </div>
            </main>
        </>
    )
}

export default MainLayout;