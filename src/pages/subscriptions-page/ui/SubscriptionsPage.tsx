import React from "react";
import tgIcon from "../../../app/assets/icons/Telegram.svg";
import ytIcon from "../../../app/assets/icons/Youtube.svg";
import instagramIcon from "../../../app/assets/icons/Instagram.svg";
import disTgIcon from "../../../app/assets/icons/dis_telegram.svg";
import disInstagramIcon from "../../../app/assets/icons/dis_instagram.svg";
import disYtIcon from "../../../app/assets/icons/dis_youtube.svg";
import newsIcon from "../../../app/assets/icons/newsmode.svg";
import badging from "../../../app/assets/icons/app_badging.svg";
import noteIcon from "../../../app/assets/icons/speaker_notes.svg";
import imageIcon from "../../../app/assets/icons/imagesmode.svg";
import videoIcon from "../../../app/assets/icons/play_circle.svg";
import { SocialButton } from "../../../shared/ui/social-button/SocialButton";
import { IconButton } from "../../../shared/ui/icon-button";
import plusIcon from "../../../app/assets/icons/plus.svg";
import { SubscribtionCard } from "../../../widgets/subscribtion-card";
import { Link } from "react-router-dom";
import questionIcon from "../../../app/assets/icons/contact_support.svg"
import { SubscriptionModal } from "../../../widgets/subscription-modal";
import { ModalDataTypes } from "./types";

export const SubscriptionsPage: React.FC = () => {
  const [subscribtions] = React.useState(
    [
      {
        title: 'Посты',
        categoryId: 1,
        icon: newsIcon,
        isActive: true,
        endDate: '20 д. 11ч. 38 мин.',
        procentRemain: 75,
      },
      {
        title: 'Истории',
        categoryId: 1,
        icon: badging,
        isActive: true,
        endDate: '15 д. 05ч. 17 мин.',
        procentRemain: 100,
      },
      {
        title: 'Комментарии',
        categoryId: 1,
        icon: noteIcon,
        isActive: true,
        endDate: '15 д. 05ч. 17 мин.',
        procentRemain: 2.4,
      },
      {
        title: 'Изображения',
        categoryId: 1,
        icon: imageIcon,
        isActive: false,
        endDate: '15 д. 05ч. 17 мин.',
        procentRemain: 20.4,
      },
      {
        title: 'Видео',
        categoryId: 1,
        icon: videoIcon,
        isActive: false,
        endDate: '15 д. 05ч. 17 мин.',
        procentRemain: 20.4,
      },
      {
        title: 'Посты',
        categoryId: 2,
        icon: newsIcon,
        isActive: false,
        endDate: '15 д. 05ч. 17 мин.',
        procentRemain: 20.4,
      },
      {
        title: 'Истории',
        categoryId: 2,
        icon: badging,
        isActive: false,
        endDate: '15 д. 05ч. 17 мин.',
        procentRemain: 100,
      },
      {
        title: 'Комментарии',
        categoryId: 2,
        icon: noteIcon,
        isActive: false,
        endDate: '15 д. 05ч. 17 мин.',
        procentRemain: 20.4,
      },
      {
        title: 'Изображения',
        categoryId: 2,
        icon: imageIcon,
        isActive: false,
        endDate: '12.03.2022',
        procentRemain: 20.4,
      },
      {
        title: 'Видео',
        categoryId: 2,
        icon: videoIcon,
        isActive: false,
        endDate: '12.03.2022',
        procentRemain: 20.4,
      },
  ]);
  const [categories] = React.useState(
    [
      {
        value: 'Telegram',
        id: 1,
        image: tgIcon,
        disableImage: disTgIcon,
        isConnected: true,
      },
      {
        value: 'You Tube',
        id: 2,
        image: ytIcon,
        disableImage: disYtIcon,
        isConnected: true,
      },
      {
        value: 'Instagram',
        id: 3,
        image: instagramIcon,
        disableImage: disInstagramIcon,
        isConnected: false
      },
  ]);
  const [QuestionsModalList] = React.useState([
    {
      value: 'Как работают подписки',
      path: '/#',
    },
    {
      value: 'Как оформить подписку',
      path: '/#',
    },
    {
      value: 'Помощь',
      path: '/#',
    },
  ])
  const [subscriptionModalData, setSubscriptionModalData] = React.useState({
    title: '',
    text: '',
    days: 0,
    price: '',
    tags: [
      {
        value: '',
        image: '',
      }
    ],
    list: [''],
  })

  const [selectedCategoryId, setSelectedCategoryId] = React.useState<number>(1);
  const [isQuestionsModalHidden, setIsQuestionsModalHidden] = React.useState<boolean>(true);
  const [isSubscriptionModalHidden, setIsSubscriptionModalHidden] = React.useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = React.useState(categories.filter((category) => category.id === selectedCategoryId)[0]);
  const [currentSubscribtions, setCurrentSubscribtions] = React.useState(subscribtions.filter((subscribtion) => subscribtion.categoryId === selectedCategoryId));
  const handleCreateSubscription = ({ title, text, days, price, tags, list } : ModalDataTypes) => {
    setIsSubscriptionModalHidden(false);
    setSubscriptionModalData({
      title,
      text,
      days,
      price,
      tags,
      list,
    })
  }

  React.useEffect(() => {
    setCurrentSubscribtions(subscribtions.filter((subscribtion) => subscribtion.categoryId === selectedCategoryId))
  }, [selectedCategoryId, subscribtions])

  React.useEffect(() => {
    setSelectedCategory(categories.filter((category) => category.id === selectedCategoryId)[0])
  }, [selectedCategoryId, categories])

  return (
    <main>
      <h1 className="sm:text-[20px] text-[16px] mt-[17px] lg:mt-[25px] font-semibold text-center xl:hidden">Подписки</h1>
      <p className="xl:text-[24px] text-[16px] max-w-[345px] leading-[20px] mt-[5px] xl:mt-[18px] lg:text-[20px] text-center lg:leading-[25px] lg:mt-[5px] lg:max-w-[660px] mx-auto xl:mx-0 xl:text-left xl:max-w-[780px] xl:leading-[29px]">Оформляйте подписки на различные типы контента в социальных сетях, чтобы брать заказы на Рекламные Кампании</p>
      <div className="flex sm:justify-end items-center sm:items-center sm:flex-row flex-col-reverse sm:mt-[60px] xl:justify-between xl:mt-[37px]">
        <div className="flex mt-[59px] sm:mt-0 pl-[15px] w-full overflow-auto sm:w-auto sm:pl-0 gap-[5px]">
          {categories.map((category, index) => (
            <SocialButton disableImage={category.disableImage} isConnected={category.isConnected} key={index} selectedCategoryId={selectedCategoryId} setSelectedCategoryId={setSelectedCategoryId} value={category.value} id={category.id} image={category.image} />
          ))}
        </div>
        <div className="sm:ml-[63px] mr-0 sm:mr-[15px] lg:mr-0 mt-[20px] sm:mt-0 xl:ml-0">
          <IconButton value="Взать заказ" path="/#" image={plusIcon}/>
        </div>
      </div>
      <section className="p-[15px] relative my-[17px] rounded-[30px] bg-[#FFFFFF80]">
      {selectedCategory.isConnected ?
        <>
          <div className="flex justify-between">
            <div>
            {currentSubscribtions.some((subscription) => subscription.isActive === true) ?
              <p className="md:text-2xl text-[18px] mt-[5px] md:mt-[15px] font-medium">Подписка <span className="font-medium text-[#006DF0]">{selectedCategory.value}</span> офрмлена!</p>
            :
              <p className="md:text-2xl text-[18px] mt-[5px] md:mt-[15px] font-medium">Оформите подписку на <span className="font-medium text-[#006DF0]">{selectedCategory.value}</span></p>
            }
              <p className="text-[14px] leading-[17px] md:text-[16px] mt-[6px] md:leading-[19px] lg:max-w-[750px] xl:max-w-[1220px]">Вы можете учавствовать в Рекламных Кампаниях, которые проводятся в Telegram.  Участие в Рекламных Кампаниях также уменьшает процент оставшейся подписки. Подписка заканчиваетя по истечению времени или при 0% остатка подписки. Контент, который вы можете использовать для участия в Рекламных Кампаниях:</p>
            </div>
            <div>
              <button onClick={() => setIsQuestionsModalHidden(!isQuestionsModalHidden)} className="bg-white hover:border-[1px] hidden md:flex hover:border-[#ECEEF1] hover:bg-white transition-all w-[38px] h-[38px] sm:w-[52px] sm:h-[52px] xl:w-[67px] xl:h-[67px] rounded-full items-center justify-center">
                <div className='bg-center bg-no-repeat w-[20px] h-[20px] lg:w-[44px] lg:h-[44px] rounded-full' style={{ backgroundImage: `url('${questionIcon}')` }}></div>
              </button>
              <div className={`${isQuestionsModalHidden ? 'opacity-0 invisible' : 'opacity-100 visible'} transition-all ease-in-out absolute w-[325px] z-10 right-0 mt-[10px] border-[1px] border-[#ECEEF1] bg-[#F7F9FB] p-[10px] rounded-[20px]`}>
                {QuestionsModalList.map(({value, path}, index) => (
                  <Link key={index} className="font-normal flex items-center transition-all hover:text-black px-[15px] py-[13px] text-[16px] text-[gray] rounded-[15px]" to={path}>{value}</Link>
                ))}
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-[10px] mt-[20px] xl:grid-cols-4 2xl:grid-cols-5">
            {currentSubscribtions.map((subscribtion, index) => (
              <SubscribtionCard category={categories.filter((category) => category.id === selectedCategoryId)[0]} key={index} handleCreateSubscription={handleCreateSubscription} {...subscribtion} />
            ))}
          </div>
        </>
        :
        <div className="rounded-[30px] min-h-[450px] md:min-h-[680px] xl:min-h-[521px] w-full flex flex-col pt-[74px] md:pt-[107px] xl:justify-center items-center bg-[#f8f9fb]">
          <p className="text-[14px] md:text-[20px] xl:text-2xl text-center text-[#00000080]"><Link to='/#' className="text-[#006DF0]">Социальные сети </Link>не подключены.</p>    
          <p className="text-[14px] md:text-[20px] xl:text-2xl xl:max-w-[802px] leading-[18px] md:leading-[25px] sm:max-w-[750px] mt-[5px] xl:mt-[10px] text-center text-[#00000080]">Если вы хотите принимать участие в <Link to='/#' className="text-[#006DF0]">Рекламных Кампаниях</Link> перейдите в личный кабинет и подключите свои <Link to='/#' className="text-[#006DF0]">Социальные сети</Link></p>
          <Link to='/profile' className="bg-black mt-[30px] hover:opacity-90 transition-all text-white font-medium text-[14px] md:text-[16px] py-[13px] px-[20px] md:px-[30px] md:py-[19px] xl:py-[24px] rounded-[61px]">Подключить cоциальные сети</Link>
        </div>}
      </section>
      <SubscriptionModal tags={subscriptionModalData.tags} list={subscriptionModalData.list} days={subscriptionModalData.days} price={subscriptionModalData.price} text={subscriptionModalData.text} isHidden={isSubscriptionModalHidden} setIsHidden={setIsSubscriptionModalHidden} title={subscriptionModalData.title} />
    </main>
  )
}