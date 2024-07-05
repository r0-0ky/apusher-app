import React from "react";
import { CategoryButton } from "../../../shared/ui/category-button";
import { categoriesTypes } from "./types";
import { SearchInput } from "../../../shared/ui/search-input";
import { QuestionCard } from "../../../widgets/question-card";
import profileIcon from "../../../app/assets/icons/account_circle.svg";
import walletIcon from "../../../app/assets/icons/wallet.svg";
import orderIcon from "../../../app/assets/icons/list_alt.svg";
import { ArticleCard } from "../../../widgets/article-card";
import { useCardsRender } from "../../../shared/hooks/UseCardsRender";
import { IconCircleButton } from "../../../shared/ui/icon-circle-button";
import searcIcon from "../../../app/assets/icons/search.svg";

export const KnowledgesPage: React.FC = () => {
  const [categories] = React.useState<categoriesTypes[]>(
    [
      {
        value: 'Заказы и Рекламные кампании',
        id: 1,
      },
      {
        value: 'Подписки и социальные сети',
        id: 2,
      },
      {
        value: 'Кошелек',
        id: 3,
      },
    ]);
  const [selectedCategory, setSelectedCategory] = React.useState<number>(1);

  const [questions] = React.useState([
    {
      id: 1,
      title: 'Как найти заказ?',
      text: 'Чтобы найти заказы, зарегистрируйтесь на нашей платформе и перейдите в раздел "Доступные заказы". Там вы сможете найти актуальные предложения заказчиков. Вы можете использовать поиск и фильтры для выбора самого подходящего для вас варианта.',
      path: '/#',
      buttonValue: 'Перейти к заказам',
      buttonImage: orderIcon,
      buttonPath: '/#',
    },
    {
      id: 2,
      title: 'Как происходит оплата?',
      text: 'Оплата производится через нашу платформу после того, как вы утвердите выполненную работу. Мы гарантируем безопасные платежи и защиту интересов заказчиков. Оплата производится в криптовалюте на ваш криптоккошелек или банковскую карту с учетом текущего курса.',
      path: '/#',
      buttonValue: 'Мои Финансы',
      buttonImage: walletIcon,
      buttonPath: '/#',
    },

    {
      id: 3,
      title: 'Как заработать больше на Рекламных кампаниях?',
      text: 'Чтобы заработать больше на рекламных кампаниях, важно уделить внимание нескольким ключевым аспектам: добавить все свои социальные сети в профиле, описать свою деятельность, определить категории деятельности и стремиться улучшать показатели по аудитории. Чем больше у вас аудитория - тем больше вы сможете заработать.',
      path: '/#',
      buttonValue: 'Мой Профиль',
      buttonImage: profileIcon,
      buttonPath: '/#',
    },
  ])

  const [articles] = React.useState([
    {
      title: 'Искусство самоменеджмента: Как организовать свою работу и достичь успеха в креативной индустрии',
      subtitle: 'Ключевые аспекты самоменеджмента для исполнителей в креативной индустрии и советы по организации работы для достижения успеха.',
      text: 'Самоменеджмент играет важную роль в жизни любого исполнителя, особенно в креативной индустрии. В данной статье мы рассмотрим ключевые аспекты самоменеджмента для исполнителей, работающих в области дизайна, музыки, искусства и других творческих областях.',
      path: '/knowledge/1',
      tags: ['Самоменеджмент', 'Организация работы'],
      readingTime: 6,
    },
    {
      title: 'Процесс вывода денег: Как правильно осуществлять финансовые операции',
      subtitle: 'Обзор различных методов вывода денег, включая электронные платежные системы, банковские транзакции, криптовалюты и другие способы перевода средств.',
      text: 'В мире современных финансовых технологий процесс вывода денег стал более удобным и доступным. В данной статье мы рассмотрим основные аспекты процесса вывода денег, включая электронные платежные системы, банковские транзакции и другие способы перевода средств.',
      path: '/knowledge/2',
      tags: ['Финансы', 'Вывод средств из сервиса'],
      readingTime: 5,
    },
    {
      title: 'Эффективное взаимодействие между заказчиками и исполнителями: Как создать успешную интеграцию',
      subtitle: 'Важные аспекты сотрудничества заказчиков и исполнителей в сфере рекламы, а также советы по созданию успешных рекламных проектов.',
      text: 'Эффективное взаимодействие между заказчиками и исполнителями играет ключевую роль в создании успешной рекламной кампании. В данной статье мы рассмотрим важные аспекты взаимодействия между заказчиками и исполнителями в сфере рекламы, а также предоставим советы по созданию эффективных рекламных проектов.',
      path: '/knowledge/3',
      tags: ['Рекланая Кампания', 'Взаимодействие с заказчиком'],
      readingTime: 3,
    },
    {
      title: 'Искусство управления временем: Как повысить продуктивность и улучшить качество жизни',
      subtitle: 'Стратегии и методы для эффективного управления временем, повышения продуктивности и достижения баланса между работой и личной жизнью.',
      text: 'В современном мире эффективное управление временем играет ключевую роль в достижении успеха как в работе, так и в личной жизни. В этой статье мы рассмотрим стратегии и методы, которые помогут вам повысить продуктивность, улучшить качество жизни и достичь баланса между работой и личным временем.',
      path: '/knowledge/4',
      tags: ['Организация времени', 'Оптимизация рабочего процесса'],
      readingTime: 4,
    },
    {
      title: 'Эффективное взаимодействие между заказчиками и исполнителями: Как создать успешную интеграцию',
      subtitle: 'Важные аспекты сотрудничества заказчиков и исполнителей в сфере рекламы, а также советы по созданию успешных рекламных проектов.',
      text: 'Эффективное взаимодействие между заказчиками и исполнителями играет ключевую роль в создании успешной рекламной кампании. В данной статье мы рассмотрим важные аспекты взаимодействия между заказчиками и исполнителями в сфере рекламы, а также предоставим советы по созданию эффективных рекламных проектов.',
      path: '/knowledge/3',
      tags: ['Рекланая Кампания', 'Взаимодействие с заказчиком'],
      readingTime: 3,
    },
    {
      title: 'Искусство управления временем: Как повысить продуктивность и улучшить качество жизни',
      subtitle: 'Стратегии и методы для эффективного управления временем, повышения продуктивности и достижения баланса между работой и личной жизнью.',
      text: 'В современном мире эффективное управление временем играет ключевую роль в достижении успеха как в работе, так и в личной жизни. В этой статье мы рассмотрим стратегии и методы, которые помогут вам повысить продуктивность, улучшить качество жизни и достичь баланса между работой и личным временем.',
      path: '/knowledge/4',
      tags: ['Организация времени', 'Оптимизация рабочего процесса'],
      readingTime: 4,
    },
    {
      title: 'Искусство самоменеджмента: Как организовать свою работу и достичь успеха в креативной индустрии',
      subtitle: 'Ключевые аспекты самоменеджмента для исполнителей в креативной индустрии и советы по организации работы для достижения успеха.',
      text: 'Самоменеджмент играет важную роль в жизни любого исполнителя, особенно в креативной индустрии. В данной статье мы рассмотрим ключевые аспекты самоменеджмента для исполнителей, работающих в области дизайна, музыки, искусства и других творческих областях.',
      path: '/knowledge/1',
      tags: ['Самоменеджмент', 'Организация работы'],
      readingTime: 6,
    },
    {
      title: 'Процесс вывода денег: Как правильно осуществлять финансовые операции',
      subtitle: 'Обзор различных методов вывода денег, включая электронные платежные системы, банковские транзакции, криптовалюты и другие способы перевода средств.',
      text: 'В мире современных финансовых технологий процесс вывода денег стал более удобным и доступным. В данной статье мы рассмотрим основные аспекты процесса вывода денег, включая электронные платежные системы, банковские транзакции и другие способы перевода средств.',
      path: '/knowledge/2',
      tags: ['Финансы', 'Вывод средств из сервиса'],
      readingTime: 5,
    },
  ])

  const {CardsCount} = useCardsRender()

  const [isInput, setIsInput] = React.useState(false)

  return (
    <main>
      <h1 className="text-[16px] mt-[18px] lg:mt-[24px] font-semibold text-center lg:text-[20px] xl:hidden">База знаний</h1>
      <p className="text-[16px] leading-[18px] px-[15px] xl:px-0 lg:leading-[23px] text-center mx-auto xl:mx-0 xl:text-left lg:text-[20px] xl:text-2xl max-w-[640px] xl:max-w-[820px] mt-[8px] xl:mt-[15px]">Найдите ответы на интересующие вас вопросы с помощью наших статей или воспользуйтесь поиском по разделу</p>
      <div className="mt-[62px] relative sm:px-[15px] lg:px-0 xl:mt-[35px] flex-col md:flex-row flex md:justify-end xl:justify-between items-center justify-between">
        <div className={` ${isInput ? 'sm:w-0' : 'sm:w-auto'} sm:overflow-hidden transition-all flex mb-[20px] md:mb-0 xl:mb-0 px-[15px] sm:px-0 overflow-auto xl:overflow-visible w-full items-center gap-[5px]`}>
          {categories.map((category, index) => <CategoryButton selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} key={index} value={category.value} id={category.id} />)}
        </div>
        <div className={`px-[15px] ${isInput ? 'md:w-full' : 'md:w-0'} xl:block overflow-hidden transition-all sm:px-0 xl:w-[370px] w-full`}>
          <SearchInput />
        </div>
        <div className="hidden ml-[60px] md:block xl:hidden">
          <IconCircleButton image={searcIcon} handleClick={() => setIsInput(!isInput)} />
        </div>
      </div>
      <section className="bg-[#f7f9fb] sm:mt-[17px] mt-[10px] rounded-[30px] p-[15px]">
        <p className="font-medium text-[18px] mt-[6px] leading-[21px] lg:leading-[18px] lg:text-2xl lg:mt-[14px]">Часто задаваемые и актуальные вопросы для Исполнителей</p>
        <div className="mt-[20px] lg:mt-[17px] xl:mt-[18px] gap-[13px] lg:gap-[20px] flex flex-col">
          {questions.map((question, index) => <QuestionCard buttonPath={question.buttonPath} buttonValue={question.buttonValue} buttonImage={question.buttonImage} path={question.path} text={question.text} title={index + 1 + '. ' + question.title} key={index} />)}
        </div>
      </section>
      <section className="mt-[43px] mb-[20px] lg:mt-[35px] lg:mb-[49px] flex flex-col items-center">
        <p className="font-semibold text-[16px] lg:text-[20px] xl:text-2xl text-center">Статьи для Исполнителей</p>
        <div className="grid xl:grid-cols-2 mt-[10px] lg:mt-[15px] xl:mt-[20px] gap-[10px] xl:gap-[20px]">
          {articles.slice(0, CardsCount).map((article, index) => <ArticleCard key={index} {...article} />)}
        </div>
        <button className="font-normal hover:border-[#ECEEF1] hover:text-[#006DF0] border-[1px] border-[#006cf000] transition-all text-[14px] lg:text-[16px] text-center py-[14px] xlg:py-[24px] px-[25px] rounded-[61px] bg-[#f7f9fb] mt-[10px] text-[gray]">Загрузить ещё</button>
      </section>
    </main>
  );
};