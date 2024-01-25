import axios from 'axios';

import { AsseblyType, ComponentsIdType } from '@/settings/assembly';

interface IJsonObject {
    [key: string]: string;
}

export interface IJsonData {
    image: string;
    arr: Array<string[]>;
}

export async function getLocalData(assebly: AsseblyType, componentId: ComponentsIdType, origin: string | null): Promise<IJsonData> {
    if (!origin) return { arr: [], image: '' };

    let arr: Array<string[]> = [];

    const { data } = await axios.get(`${origin}/json/${assebly}.json`);
    const objectData: IJsonObject = data[componentId] as IJsonObject;

    // @ts-ignore
    for (const key in objectData.characteristics) arr.push([key, objectData.characteristics[key]]);

    return {
        image: `${origin}/assets/assemly/${assebly}/components/${objectData.image}`,
        arr
    };
}