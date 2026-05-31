import { createContext, useContext, useEffect, useState } from "react";
import siteSettingApi from "../api/siteSettingApi";

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {

    const [siteSetting, setSiteSetting] = useState({});

    useEffect(() => {
        loadSiteSetting();
    }, []);

    const loadSiteSetting = async () => {

        try {

            const response =
                await siteSettingApi.get();

            const settings = {};

            response.data.data.forEach(item => {
                settings[item.settingKey] = item.settingValue;
            });

            setSiteSetting(settings);

        } catch (error) {

            console.error(error);

        }
    };

    return (
        <SiteContext.Provider
            value={{ siteSetting }}
        >
            {children}
        </SiteContext.Provider>
    );
};

export const useSite = () => useContext(SiteContext);