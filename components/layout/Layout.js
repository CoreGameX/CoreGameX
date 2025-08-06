import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import PageHead from './PageHead'
import Footer1 from './footer/Footer1'
import Header1 from "./header/Header1"
import Header2 from "./header/Header2"


export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, pageCls }) {
    const [scroll, setScroll] = useState(0)
    // Moblile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => setMobileMenu(!isMobileMenu)



    return (
        <>

            <PageHead headTitle={headTitle} />
            <div id="wrapper">
                <div id="page" className={`pt-40 ${pageCls ? pageCls : ""}`}>
                    {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />}
                    {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
                    {headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}


                    {/* <MobileMenu /> */}

                    {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                    {children}


                    {!footerStyle && < Footer1 />}
                    {footerStyle == 1 ? < Footer1 /> : null}

                </div>
            </div>
            <BackToTop />

        </>
    )
}
