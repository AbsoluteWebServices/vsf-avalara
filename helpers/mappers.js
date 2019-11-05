export const mapAddress = (address) => {
  return {
    'line1': address.streetAddress,
    'line2': address.apartmentNumber,
    'city': address.city,
    'region': address.state,
    'country': address.country,
    'postalCode': address.zipCode
  }
}
