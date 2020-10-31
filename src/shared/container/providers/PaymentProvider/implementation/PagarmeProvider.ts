import pagarme from 'pagarme';
import ICreateTransaction from '@modules/order/dtos/ICreateTransaction';

import AppError from '@shared/errors/AppError';
import IPaymentProvider from '../model/IPaymentProvider';

export interface ITransaction {
  amount: number;
  card_number: string;
  card_cvv: string;
  card_expiration_date: string;
  card_holder_name: string;
}

interface IResponse {
  status: string;
  payment_method: string;
  boleto_url: string;
  boleto_barcode: string;
  id: string;
  boleto_expiration_date: string;
}

interface IBilling {
  name: string;
  address: {
    country: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    street_number: string;
    zipcode: string;
  };
}

export default class PagarmeProvider implements IPaymentProvider {
  public async pay({
    payment_method,
    amount,
    card_hash,
    customer,
    billing,
    items,
  }: ICreateTransaction): Promise<IResponse> {
    const client = await pagarme.client.connect({
      api_key: process.env.APP_PAGARME_ENCRYPTION_KEY,
    });

    try {
      const dataCard = {
        card_hash,
        amount,
        customer,
        payment_method,
        billing,
        items,
      };

      console.log(dataCard);
      const transactionCreated = await client.transactions.create({
        card_hash,
        amount,
        customer,
        payment_method,
        billing,
        items,
      });

      if (transactionCreated.status === 'refused') {
        console.log('entrou aki');
        throw new AppError('Transaction Refused');
      }
    } catch (err) {
      console.log(err.response);
    }

    return transactionCreated;
  }
}
