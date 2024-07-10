import request from '@/utils/request'

export const infoGroupService = (talentId) => {
    return request.get(`/infoGroup/${talentId}`)
}