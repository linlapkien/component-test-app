import style from '@/styles/Plan.module.css';
import containerStyle from '@/styles/Container.module.css';

export default function ThreeTierPricing() {
  return (
    <div className={containerStyle.container}>
      {/* ---------------------------------- */}
      <div className={style.plan}>
        <div className={style.inner}>
          <span className={style.pricing}>
            <span>
              $0 <small>/ m</small>
            </span>
          </span>
          <p className={style.title}>Free</p>
          <p className={style.info}>
            This plan is for those who have a team already and running a large
            business.
          </p>
          <ul className={style.features}>
            <li>
              <span className={style.icon}>
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <span>
                <strong>2</strong> team members
              </span>
            </li>
            <li>
              <span className={style.icon}>
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <span>
                Plan <strong>team meetings</strong>
              </span>
            </li>
            <li>
              <span className={style.icon}>
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <span>File sharing</span>
            </li>
          </ul>
          <div className={style.action}>
            <a className={style.button} href="#">
              Choose plan
            </a>
          </div>
        </div>
      </div>
      {/* ---------------------------------- */}
      <div className={style.plan}>
        <div className={style.inner}>
          <span className={style.pricing}>
            <span>
              $49 <small>/ m</small>
            </span>
          </span>
          <p className={style.title}>Professional</p>
          <p className={style.info}>
            This plan is for those who have a team already and running a large
            business.
          </p>
          <ul className={style.features}>
            <li>
              <span className={style.icon}>
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <span>
                <strong>20</strong> team members
              </span>
            </li>
            <li>
              <span className={style.icon}>
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <span>
                Plan <strong>team meetings</strong>
              </span>
            </li>
            <li>
              <span className={style.icon}>
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <span>File sharing</span>
            </li>
          </ul>
          <div className={style.action}>
            <a className={style.button} href="#">
              Choose plan
            </a>
          </div>
        </div>
      </div>
      {/* ---------------------------------- */}
      <div className={style.plan}>
        <div className={style.inner}>
          <span className={style.pricing}>
            <span>
              $99 <small>/ m</small>
            </span>
          </span>
          <p className={style.title}>Business</p>
          <p className={style.info}>
            This plan is for those who have a team already and running a large
            business.
          </p>
          <ul className={style.features}>
            <li>
              <span className={style.icon}>
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <span>
                <strong>50</strong> team members
              </span>
            </li>
            <li>
              <span className={style.icon}>
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <span>
                Plan <strong>team meetings</strong>
              </span>
            </li>
            <li>
              <span className={style.icon}>
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <span>File sharing</span>
            </li>
          </ul>
          <div className={style.action}>
            <a className={style.button} href="#">
              Choose plan
            </a>
          </div>
        </div>
      </div>
      {/* ---------------------------------- */}
    </div>
  );
}
