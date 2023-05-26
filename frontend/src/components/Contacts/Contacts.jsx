import s from "./Contacts.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Contacts = (props) => {
  return (
    <div className={s.content}>
      <h1 className={s.title}>Наші контакти:</h1>
      <p className={s.text}>
        Ласкаво просимо до клініки Oxydent у Києві! Ми пишаємося надавати
        високоякісні стоматологічні послуги нашим пацієнтам, забезпечуючи їх
        здоров'ю і самопочуттю найвищий пріоритет. Якщо у вас є запитання або ви
        хочете записатися на прийом, будь ласка, скористайтеся нашими
        контактними реквізитами нижче:
      </p>
      <ul>
        <li className={s.text}>
          Адреса: Клініка Oxydent розташована у самому серці Києва за адресою
          <b> вул. Захаровська, 10, Київ</b>. Ми зручно розташовані, що дає
          змогу з легкістю дістатися до нас як на автомобілі, так і громадським
          транспортом.
        </li>
        <li className={s.text}>
          Телефон: Для запису на прийом або отримання додаткової інформації
          звертайтеся за номером телефону 380555754749. Наші доброзичливі
          співробітники з радістю відповідатимуть на всі ваші запитання та
          допоможуть узгодити найзручніший для вас час візиту.
        </li>
        <li className={s.text}>
          Електронна пошта: Якщо вам зручніше скористатися електронною поштою,
          ви можете надіслати нам свої запити, коментарі або питання на адресу
          oxydent@gmail.com. Наша команда оперативно відповість на ваше
          повідомлення та надасть необхідну допомогу.
        </li>
        <li className={s.text}>
          Графік роботи: Ми працюємо з понеділка по п'ятницю з <b>08-20</b>. У
          нашому графіку відведений час на прийоми як для вечірніх, так і для
          ранкових людей, а також у вихідні дні. Ми розуміємо, що у кожного з
          вас свої затяття, тому намагаємося забезпечити гнучкий графік, щоб
          задовольнити ваші потреби.
        </li>
      </ul>
      <h2 className={s.title}>Наші соц. мережі:</h2>
      <div className={s.socials}>
        <p className={s.text}>
          Ми в Facebook: <i className="bi bi-facebook socials_item"></i>
        </p>
        <p className={s.text}>
          Ми в Instagram: <i className="bi bi-instagram socials_item"></i>
        </p>
        <p className={s.text}>
          Ми в Twitter: <i className="bi bi-twitter socials_item"></i>
        </p>
      </div>
    </div>
  );
};

export default Contacts;