import {test, expect} from '@playwright/test'

test('Webapp deve estar online', async ({page}) => {
    await page.goto('http://172.26.96.1:8080')
    await expect(page).toHaveTitle('Gerencie suas tarefas com Mark L')
    await page.waitForTimeout(3000)
})