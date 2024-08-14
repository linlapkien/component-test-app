import style from '@/styles/Card.module.css';

export default function Card() {
  let emailState = '';
  try {
    emailState = localStorage.getItem('Submitted Email');
  } catch (error) {
    console.log('Error', error);
  }

  return (
    /* From Uiverse.io by Yaya12085 */
    <div className={style.card}>
      <div className={style.header}>
        <span className={style.icon}>
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
            ></path>
          </svg>
        </span>
        <p className={style.alert}>Thanks for subscribe us!</p>
      </div>

      <p className={style.message}>
        Hello {emailState}, I will annouce new information!
      </p>

      <div className={style.actions}>
        <a className={style.read} href="">
          Cheer
        </a>

        <a className={style.mark_as_read} href="">
          Mark as Read
        </a>
      </div>
    </div>
  );
}
