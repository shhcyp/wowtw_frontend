import request from '@/utils/request'

// 生成订单
export const createOrderService = (phoneNumber, inviteIdentifier) => {
    return request.post('/alipay/preCreate', {phoneNumber, inviteIdentifier})
}

// 查询支付状态
export const queryPaymentService = (outTradeNo) => {
    return request.post('/alipay/query', {outTradeNo})
}

// 取消订单
export const cancelPaymentService = (outTradeNo) => {
    return request.get('/alipay/cancel', {
        params: {outTradeNo}
    })
}