const PaymentController = {
    async createPayment(req,res){
        try {
            const {data, recibo, valor, observacao} = req.body;
            return res.status(201).json({message: 'Payment Created', data : {data, recibo, valor, observacao}});
        } catch (error) {
            return res.status(500).json({message: 'Erro interno no servidor'})
            
        }

    }
   

};

export default PaymentController;