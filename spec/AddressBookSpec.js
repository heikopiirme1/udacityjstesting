describe('Address Book', function() {
    var addressBook,
        thisContact;

    beforeEach(function() { // Funktsioon, mis käivitatakse ennem igat testi (it osad)
            addressBook = new AddressBook(); // Antud inititakse AddressBook ja Contact uuesti, et järgmisel testil oleks algsed muutujad
            thisContact= new Contact();
    });

    it('should be able to add a contact', function() {
        addressBook.addContact(thisContact); // Kui lisatakse kontakt "thisContact" ...
        expect(addressBook.getContact(0)).toBe(thisContact); // ... peaks addressBook.getContact(0) olema "thisContact"
    });

    it('should be able to delete a contact', function() {
        addressBook.addContact(thisContact); // Kui lisatakse kontakt "thisContact" ...
        addressBook.deleteContact(0); // ... ning seejärel kustutatakse kontakt Array esimeselt positsioonilt, ...
        expect(addressBook.getContact(0)).not.toBeDefined(); // peaks addressBook.getContact(0) olema "undefined"
    });
});
