'use client';

import React from "react";

import Header from "@/components/header";
import HomeScreen from "@/components/screens/home-screen";
import LoadScreen from "@/components/screens/load-screen";
import AboutScreen from "@/components/screens/about-screen";
import ServicesScreen from "@/components/screens/services-screen";
import QuestionsScreen from "@/components/screens/questions-screen";
import CompaniesScreen from "@/components/screens/companies-screen";
import ContactsScreen from "@/components/screens/contacts-screen";
import ModalProvider from "@/components/providers/modal-provider";
import BurgerMenu from "@/components/burger-menu";
import { useBurgerMenu } from "@/hooks/use-burger-store";

export default function Home() {
  const { isOpen, onClose } = useBurgerMenu();

  const [isLoad, setIsLoad] = React.useState<boolean>(true);

  React.useEffect(() => {
    window.onload = function () {
      setTimeout(() => {
        setIsLoad(false);
      }, 500);
    };
  }, [document]);

  return (
    <main className="h-full">
      {/* <LoadScreen isLoad={isLoad} />
      {!isLoad && (
        <> */}
      <ModalProvider />
      <Header />
      <BurgerMenu isOpen={isOpen} onChangeClose={onClose} />
      <HomeScreen />
      {/* <AboutScreen />
      <ServicesScreen />
      <CompaniesScreen />
      <QuestionsScreen />
      <ContactsScreen /> */}
      {/* </>
      )} */}
    </main>
  );
}
