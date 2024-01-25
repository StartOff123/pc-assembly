import Image from "next/image";
import Container from "../Container";
import ScreenTitle from "../screen-title";
import fon from '@/public/assets/fon.jpg';
import motherboard from '@/public/assets/motherboard.png';
import { motion } from "framer-motion";
import { questionsList } from "@/settings/questions-list";
import { Accordion, AccordionItems } from "../accordion";
import { animations } from "@/settings/animatios";

const QuestionsScreen = () => {
    return (
        <section id="questions" className="relative">
            <div className="bg-black">
                <Container>
                    <div className='bg-black flex flex-col gap-y-6 pb-6'>
                        <ScreenTitle>Вопросы</ScreenTitle>
                    </div>
                </Container>
            </div>
            <div className="relative">
                <span className='absolute w-full top-0 h-[1px] bg-black shadow-[0px_0px_60px_105px_rgb(0,0,0)] -z-10' />
                <Container>
                    <div className="py-24 grid grid-cols-2">
                        <div>
                            <h1 className="text-white text-2xl text-center pb-8">Часто задаваемые  вопросы</h1>
                            <Accordion className="flex flex-col gap-2">
                                <AccordionItems items={questionsList} />
                            </Accordion>
                        </div>
                        <motion.div initial='hidden' whileInView='visible' viewport={{ once: true }} className="h-full relative flex items-center justify-end">
                            <div className="overflow-hidden z-10">
                                <motion.div custom={1} variants={animations['fadeRight']}>
                                    <Image className='z-10' src={motherboard} alt="motherboard" />
                                </motion.div>
                            </div>
                            <motion.span custom={1.5} variants={animations['fadeRight']} className='absolute w-[1px] h-[1px] rounded-full bg-[#974F23] shadow-[0px_0px_560px_150px_rgb(250,183,41)] top-1/2 right-56' />
                        </motion.div>
                    </div>
                </Container>
                <Image className='absolute w-full h-full top-0 -z-20 opacity-30 pointer-events-none' src={fon} alt='fon' />
                <span className='absolute w-full bottom-0 -z-10 h-[1px] bg-black shadow-[0px_0px_60px_105px_rgb(0,0,0)]' />
            </div>
        </section>
    );
}

export default QuestionsScreen;