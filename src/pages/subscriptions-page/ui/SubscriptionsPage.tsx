import React from "react";
import tgIcon from "../../../app/assets/icons/Telegram.svg";
import ytIcon from "../../../app/assets/icons/Youtube.svg";
import instagramIcon from "../../../app/assets/icons/Instagram.svg";
import { SocialButton } from "../../../shared/ui/social-button/SocialButton";
import { IconButton } from "../../../shared/ui/icon-button";
import plusIcon from "../../../app/assets/icons/plus.svg";
import { SubscribtionCard } from "../../../widgets/subscribtion-card";
import { Link } from "react-router-dom";

export const SubscriptionsPage: React.FC = () => {
  const [subscribtions] = React.useState(
    [
      {
        title: 'Посты',
        categoryId: 1,
        icon: tgIcon,
        isActive: true,
        endDate: '12.03.2022',
        procentRemain: 20.4,
      },
      {
        title: 'Истории',
        categoryId: 1,
        icon: ytIcon,
        isActive: true,
        endDate: '12.03.2022',
        procentRemain: 20.4,
      },
      {
        title: 'Комментарии',
        categoryId: 1,
        icon: instagramIcon,
        isActive: true,
        endDate: '12.03.2022',
        procentRemain: 20.4,
      },
      {
        title: 'Изображения',
        categoryId: 1,
        icon: instagramIcon,
        isActive: false,
        endDate: '12.03.2022',
        procentRemain: 20.4,
      },
      {
        title: 'Видео',
        categoryId: 1,
        icon: instagramIcon,
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
      },
      {
        value: 'You Tube',
        id: 2,
        image: ytIcon,
      },
      {
        value: 'Instagram',
        id: 3,
        image: instagramIcon,
      },
  ]);

  const [selectedCategory, setSelectedCategory] = React.useState<number>(1);
  const [isLogin] = React.useState<boolean>(true);

  return (
    <main>
      <p className="xl:text-[24px] xl:mt-[18px] xl:max-w-[760px] xl:leading-[29px]">Оформляте подписки на различные типы контента в социальных сетях, чтобы брать заказы на Рекламные Кампании</p>
      <div className="flex justify-between xl:mt-[37px]">
        <div className="flex gap-[5px]">
          {categories.map((category) => (
            <SocialButton selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} value={category.value} id={category.id} image={category.image} />
          ))}
        </div>
        <IconButton value="Взать заказ" path="/#" image={plusIcon}/>
      </div>
      <section className="relative p-[15px] mt-[17px] rounded-[30px] bg-[#FFFFFF80]">
        <p className="text-2xl mt-[15px] font-medium">Подпика Telegram офрмлена!</p>
        <p className="text-[16px] mt-[6px] leading-[20px] max-w-[1220px]">Вы можете учавствовать в Рекламных Кампаниях, которые проводятся в Telegram.  Участие в Рекламных Кампаниях также уменьшает процент оставшейся подписки. Подписка заканчиваетя по истечению времени или при 0% остатка подписки. Контент, который вы можете использовать для участия в Рекламных Кампаниях:</p>
        <div className="grid gap-[10px] mt-[20px] xl:grid-cols-5">
          {subscribtions.map((subscribtion) => (
            <SubscribtionCard {...subscribtion} />
          ))}
        </div>
        {!isLogin && 
        <div className="absolute top-0 right-0 rounded-[30px] w-full h-full flex flex-col justify-center items-center bg-[#f8f9fb]">
          <p>Социальные сети не подключены.</p>    
          <p>Если вы хотите принимать участие в Рекламных Кампаниях перейдите в личный кабинет и подключите свои Социальные сети</p>
          <Link to='/profile' className="bg-black text-white font-medium text-[16px] px-[30px] py-[24px] rounded-[61px]">Подключить Социальные сети</Link>
        </div>}
      </section>
    </main>
  )
}