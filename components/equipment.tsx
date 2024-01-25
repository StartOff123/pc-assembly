import { useOrigin } from "@/hooks/use-origin";
import { IJsonData, getLocalData } from "@/lib/localdata";
import { AsseblyType, ComponentsIdType, IAssembly } from "@/settings/assembly";
import React from "react";
import { ExclamationCircleFill } from "react-bootstrap-icons";
import { VideocardSvg, ProcessorSvg, CoolingSvg, RamSvg, MotherboardSvg, SsdSvg, PoweruntSvg, FrameSvg, OcSvg } from '@/components/svg';

const componentsName: string[] = ['Видеокарта', 'Процессор', 'Охлаждение', 'Оперативная память', 'Материнская плата', 'Накопитель SSD', 'Блок питания', 'Корпус', 'Система'];
const componentsIcon: React.JSX.Element[] = [<VideocardSvg />, <ProcessorSvg />, <CoolingSvg />, <RamSvg />, <MotherboardSvg />, <SsdSvg />, <PoweruntSvg />, <FrameSvg />, <OcSvg />];

interface EquipmentProps {
    list: IAssembly['components'];
    assemblyId: IAssembly['assemblyId'];
}

const Equipment = ({ list, assemblyId }: EquipmentProps) => {
    const origin = useOrigin();

    const [currentComponent, setCurrentComponent] = React.useState<IJsonData | null>(null);
    const [currentComponentName, setCurrentComponentName] = React.useState<string>('');

    const handleGetComponents = async (assebly: AsseblyType, componentsId: ComponentsIdType, name: string) => {
        const data = await getLocalData(assebly, componentsId, origin);

        setCurrentComponent(data);
        setCurrentComponentName(name);
    };

    React.useEffect(() => {
        setCurrentComponent(null);
    }, [list]);

    return (
        <div className="p-4 flex flex-col gap-4">
            <h1 className="text-white text-2xl">Комплектация</h1>
            <div className="grid grid-cols-7 gap-8">
                <div className="col-span-4">
                    {list.map((item, i) => (
                        <div
                            onClick={() => handleGetComponents(assemblyId, item.id, item.title)}
                            className="grid grid-cols-12 py-3 border-b-[1px] border-dashed border-zinc-700"
                        >
                            <h1 className="text-gray-500 text-lg col-span-5">{componentsName[i]}</h1>
                            <span className="col-span-1">
                                {componentsIcon[i]}
                            </span>
                            <h1 className="text-gray-300 col-span-6 flex justify-between cursor-pointer hover:text-indigo-400 transition">
                                {item.title}
                                <ExclamationCircleFill className="opacity-40 rotate-180" />
                            </h1>
                        </div>
                    ))}
                </div>
                <div className="col-span-3">
                    <div className="bg-zinc-800 border-zinc-700 border-[1px] p-8 flex flex-col gap-4">
                        {currentComponent ? (
                            <div className="w-full h-[300px]" style={{ backgroundImage: `url(${currentComponent?.image})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain' }}></div>
                        ) : (
                            <div className="bg-zinc-900 h-[300px] flex justify-center items-center text-gray-500">Нажмите на любой компонент</div>
                        )}
                        {currentComponent && (
                            <div className="flex flex-col gap-4">
                                <h1 className="text-white text-xl">{currentComponentName}</h1>
                                <div className="flex flex-col gap-2">
                                    {currentComponent?.arr && currentComponent.arr.map((item, i) => (
                                        <div key={i} className="flex gap-2">
                                            <p className="text-gray-500">{item[0]}</p>
                                            <span className="flex-1 border-b-[1px] mb-1 border-dashed border-zinc-700" />
                                            <p className="text-gray-300">{item[1]}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Equipment;