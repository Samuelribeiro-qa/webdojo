Cypress.Commands.add('fillConsultancyForm', (form) => {
    cy.get('input[placeholder="Digite seu nome completo"]').type(form.name)
    cy.get('input[placeholder="Digite seu email"]').type(form.email)
    cy.get('input[placeholder="(00) 00000-0000"]').type(form.phone)
    //.should('have.value', '(11) 99999-2000')

    cy.contains('label', 'Tipo de Consultoria')
        .parent()
        .find('select')
        .select(form.consultancyType)

    if (form.personType === 'cpf') {
        cy.contains('label', 'Pessoa Física')
            .find('input')
            .click()
            .should('be.checked')

        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('be.not.checked')
    }

    cy.contains('label', 'CPF')
        .parent()
        .find('input')
        .type(form.document)
    //.should('have.value', '049.569.350-21')

    form.discoveryChannels.forEach((channel) => {
        cy.contains('label', channel)
            .find('input')
            .check()
            .should('be.checked')
    })

    cy.get('input[type="file"]')
        .selectFile(form.file, { force: true })

    cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
        .type(form.description)

    form.techs.forEach((tech) => {
        cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
            .type(tech)
            .type('{enter}')

        cy.contains('label', 'Tecnologias')
            .parent()
            .contains('span', tech)
            .should('be.visible')
    })

    if (form.terms === true) {
        cy.contains('label', 'Li e aceito os')
            .find('input')
            .check()
            .should('be.checked')
    }
})

Cypress.Commands.add('submitConsultancyForm', () => {
    cy.contains('button', 'Enviar formulário')
        .click()
})

Cypress.Commands.add('validadeConsultancyModal', () => {
    cy.get('h3', { timeout: 7000 })
        .should('be.visible')
        .and('have.text', 'Sucesso!')
})