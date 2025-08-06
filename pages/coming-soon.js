import Link from "next/link"
export default function Home() {

    return (
        <>

            <div id="wrapper">
                <div id="page">
                    <div className="section-single-page coming-soon flex gap-12 flex-col justify-center items-center">
                        <div className="w-screen flex justify-center"> 
                            <Link href="/" className="flex items-center group ">
                                <div className="w-64 lg:w-80 rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
                                    <img
                                        src="/assets/images/logo/coreGameX.png"
                                        alt="CoreGameX Logo"
                                        className="w-full h-full transition-transform duration-300"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentNode.innerHTML = `
                                        <div class='w-full h-full bg-neutral-300 rounded-xl flex items-center justify-center shadow-lg'>
                                        <span class='text-black font-bold text-2xl lg:text-4xl'>CG</span>
                                        </div>
                                        `;
                                        }}
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className="content">
                            <div className="widget-bg-line">
                                <div className="wraper">
                                    <div className="bg-grid-line y top">
                                        <div className="bg-line" />
                                    </div>
                                    <div className="bg-grid-line x left">
                                        <div className="bg-line" />
                                    </div>
                                    <div className="bg-grid-line y bottom">
                                        <div className="bg-line" />
                                    </div>
                                    <div className="bg-grid-line x right">
                                        <div className="bg-line" />
                                    </div>
                                </div>
                            </div>
                            <h1>Coming soon</h1>
                            <p>We’re crafting a new experience. Available for you shortly.</p>

                        
                            
                        </div>
                        <div className="widget-social bottom-0">
                            <ul className="flex justify-center">
                                <li><Link href="#" className="fab fa-discord" /></li>
                                <li><Link href="#" className="fab fa-x-twitter" /></li>
                                <li><Link href="#" className="icon-youtube" /></li>  
                                 <li><Link href="#" className="fab fa-linkedin-in" /></li>                             
                            </ul>
                        </div>
                    </div>
                </div>
                {/* /#page */}
            </div>

        </>
    )
}