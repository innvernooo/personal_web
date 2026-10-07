import axios from "axios";
import type { FooterRequest } from "../../features/footer/validation/FooterSchema";

export const contactApi = async (data: FooterRequest) => {
    const res = await axios.post(
        'https://api.backendless.com/51BDC217-6F0F-4668-8A87-71B5CFFCD59A/EC698C6A-021C-4A86-8DAD-32A425C360DD/data/contactme',
        data,
      );

      return res?.data
}