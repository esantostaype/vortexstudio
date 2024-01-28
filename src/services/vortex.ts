import { API_URL } from '../config'

export const getHome = async () => {
    const home = await fetch( API_URL + "/api/home?populate[0]=hero&populate[hero][populate][0]=video&populate[hero][populate][1]=videoPoster&populate[0]=about&populate[about][populate][0]=image" );
    const { data } = await home.json();
    return data;
}

export const getServices = async () => {
    const services = await fetch( API_URL + "/api/services" );
    const { data } = await services.json();
    return data;
}

export const getServiceBy = async ( id: string ) => {
    const service = await fetch( API_URL + `/api/services/${ id }` );
    const { data } = await service.json();
    return data;
}

export const getProjects = async () => {
    const projects = await fetch( API_URL + "/api/projects?[fields]=name&[fields]=slug&populate[thumbnail][fields][0]=url" );
    const { data } = await projects.json();
    return data;
}

export const getProjectBy = async ( id: string ) => {
    const service = await fetch( API_URL + `/api/projects/${ id }?[fields]=name&populate[categories][fields][0]=name&populate[technologies][fields][0]=name&populate[gallery][fields][0]=url` );
    const { data } = await service.json();
    return data;
}