import { readJSON } from '../utils'

const services = readJSON('../data/services.json')
const projects = readJSON('../data/projects.json')

export const getServices = async () => {
    return services
}

export const getProjects = async () => {
    return projects
}