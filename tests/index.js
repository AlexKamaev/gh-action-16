fixture `tests`
    .page `http://localhost:8080`;

test('click', async t => {
   await t.click('h1');
});
