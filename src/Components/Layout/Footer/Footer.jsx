import styles from './Footer.module.scss'

function Footer() {
  return (
    <>
      <footer>
        <nav>
          <ul>
            <li className={styles.FirstColumn}>
              <div>
                <ul>
                  <li>
                    <a href="">Помощь</a>
                  </li>
                  <li>
                    <a href="">О компании</a>
                  </li>
                  <li>
                    <a href="">Вакансии</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="SecondColumn">
              <div>
                <ul>
                  <li>
                    <a href="telegram">
                      <img

                        src=""
                        alt=""
                        width=""
                        height=""
                        loading="lazy"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="instagram">
                      <img

                        src=""
                        alt=""
                        width=""
                        height=""
                        loading="lazy"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="tiktok">
                      <img

                        src=""
                        alt=""
                        width=""
                        height=""
                        loading="lazy"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="ThirdColumn">
              <div>
                <ul>
                  <li>
                    <a href="play-market">
                      <img

                        src=""
                        alt=""
                        width=""
                        height=""
                        loading="lazy"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="app-store">
                      <img

                        src=""
                        alt=""
                        width=""
                        height=""
                        loading="lazy"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <p>© 2007-2026 ТОО FlipClone.kz</p>
          <p>Lorem ipsum dolor sit amet, cons
            ectetur adipisicing elit. Aliquam doloremque dolores enim, exercitationem expedita, fugiat impedit nam
            nemo nihil nobis, porro possimus ut voluptates? Alias culpa quos sit ullam voluptatibus.
          </p>
        </nav>
      </footer>
    </>
  )
}

export default Footer