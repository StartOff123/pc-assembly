import { AsseblyType } from "@/settings/assembly";
import { ServicesType } from "@/settings/services-list";

export type RedirectToOrderType = AsseblyType | ServicesType;

export const redirectToOrder = (type: RedirectToOrderType) => {
    switch (type) {
        case 'power':
            redirect('https://vk.com/pcassembly_zlat?w=product-224248018_9112009%2Fquery');
            break;
        case 'intercom':
            redirect('https://vk.com/pcassembly_zlat?w=product-224248018_9112091%2Fquery');
            break;
        case 'apgrate':
            redirect('https://vk.com/pcassembly_zlat?w=product-224248018_9092681%2Fquery');
            break;
        case 'to':
            redirect('https://vk.com/pcassembly_zlat?w=product-224248018_9092682%2Fquery');
            break;
        case 'diagnistic':
            redirect('https://vk.com/pcassembly_zlat?w=product-224248018_9107762%2Fquery');
            break;
    }
}

const redirect = (url: string) => {
    window.location.href = url;
}