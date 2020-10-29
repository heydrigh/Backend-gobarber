interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'heydrigh@heyd.dev',
      name: 'Heydrigh WebDev',
    },
  },
} as IMailConfig;
