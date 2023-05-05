import design from "./hotstar.module.css"
const Hotstar=()=>
{
    return(
        <section>
            <article>
                <div className={design.sym}>
                <i class="fa-solid fa-bars"/>
                </div>
                <div className={design.logo}>
                <img class="brand-logo" src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="Disney+&nbsp;Hotstar"/>
                </div>
                <div className={design.menu}>
                <ol>
                    <li><a href="">Tv</a></li>
                    <li><a href="">Movies</a></li>
                    <li><a href="">Sports</a></li>
                    <li><a href="">Disney+</a></li>
                    <li><a href="" className={design.kid}>KiDS</a></li>
                 </ol>
                </div>
                <div className={design.empty}></div>
                <div className={design.search}>
                    <div>
                        <input type="text"  placeholder=" Search" />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div className={design.login}>
                    <ol>
                        <li className={design.sub}><a href="" >SUBSCRIBE</a></li>
                        <li><a href="">LOGIN</a></li>
                    </ol>
                </div>
            </article>
        </section>
    )
}
export  default Hotstar