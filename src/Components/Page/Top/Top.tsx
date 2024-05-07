import Blank from "../../UI/Blanks/Blank"
import Footer from "../../UI/Footer"
import Header from "../../UI/Header"
import LongLine from "../../UI/Lines/LongLine"
import Quotes from "../../UI/Quotes"
import ScrollToTopButton from "../../UI/ScrollToTopButton"
import RecentCreation from "../Products/Genre/RecentCreation"
import Profile from "./Profile"

const Top = () => {
    return (
        <>
            <Header/>
            <Blank />
            <Quotes />
            <Blank />

            <Profile />

            <section>

                <Blank/>
                <LongLine />
                <Blank/>

                <RecentCreation />
            </section>

            <ScrollToTopButton />
            <Footer/>
        </>
    )
}

export default Top