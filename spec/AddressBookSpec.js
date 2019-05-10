describe('Address Book', function() {
    it('should be able to add a contact', function() {
        var addressBook = new AddressBook(),
            thisContact = new Contact(); // Inititakse muutujad

        addressBook.addContact(thisContact); // Kui lisatakse kontakt "thisContact" ...

        expect(addressBook.getContact(0)).toBe(thisContact); // ... peaks addressBook.getContact(0) olema "thisContact"
    });
    it('should be able to delete a contact', function() {
        var addressBook = new AddressBook(),
            thisContact = new Contact(); // Inititakse muutujad

        addressBook.addContact(thisContact); // Kui lisatakse kontakt "thisContact" ...
        addressBook.deleteContact(0); // ... ning seejärel kustutatakse kontakt Array esimeselt positsioonilt, ...

        expect(addressBook.getContact(0)).not.toBeDefined(); // peaks addressBook.getContact(0) olema "undefined"
    });
});
