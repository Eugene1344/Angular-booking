class Utils {
  static uniqueId(): string {
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36).substring(2);

    return dateString + randomness;
  };

  static addDate(date1: Date, date2: Date | void): Date {

    if (!date2) {
      date2 = new Date(date1);
      date2.setDate(date2.getDate() + 1);
    }

    return date2;
  }
}

export {
  Utils
};
