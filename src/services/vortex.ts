import { API_URL } from '../config'

export const getHome = async () => {
    const home = await fetch( API_URL + "/api/home?populate[hero][fields]=titleLine1,titleLine2,titleLine3,subtitle,video&populate[hero][populate][video][fields][0]=url&populate[hero][populate][videoPoster][fields][0]=url&populate[about][fields]=title,subtitle,content&populate[about][populate][image][fields][0]=url" );
    const { data } = await home.json();
    return data;
}

export const getServices = async () => {
    const services = await fetch( API_URL + "/api/services?[fields]=name&[fields]=slug&[fields]=shortDescription&[fields]=color&populate[icon][fields][0]=url" );
    const { data } = await services.json();
    return data;
}

export const getServiceBy = async ( id: string ) => {
    const service = await fetch( API_URL + `/api/services/${ id }?[fields]=name&[fields]=slug&[fields]=shortDescription&[fields]=processTitle&populate[image][fields][0]=url&populate[process][fields]=title,description&populate[process][populate][icon][fields][0]=url&populate[process][populate][image][fields][0]=url&populate[adjectives][fields][0]=name` );
    const { data } = await service.json();
    return data;
}

export const getProjects = async () => {
    const projects = await fetch( API_URL + "/api/projects?[fields]=name&[fields]=slug&populate[thumbnail][fields][0]=url" );
    const { data } = await projects.json();
    return data;
}

export const getProjectBy = async ( id: string ) => {
    const service = await fetch( API_URL + `/api/projects/${ id }?[fields]=name&[fields]=description&populate[thumbnail][fields][0]=url&populate[services][fields][0]=name&populate[services][fields][1]=slug&populate[technologies][fields][0]=name&populate[technologies][populate][icon][fields][0]=url&populate[gallery][fields][0]=url` );
    const { data } = await service.json();
    return data;
}