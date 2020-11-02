import { ClientFunction } from 'testcafe';

const getWindowDimensionsInfo = ClientFunction(() => {
   return {
      innerWidth:      window.innerWidth,
      innerHeight:     window.innerHeight,
      outerWidth:      window.outerWidth,
      outerHeight:     window.outerHeight,
      availableHeight: screen.availHeight,
      availableWidth:  screen.availWidth
   };
});

fixture `tests`
    .page `http://localhost:8080`;

test('resize', async t => {
   console.log(await getWindowDimensionsInfo());

   await t.resizeWindow(600, 600);

   console.log(await getWindowDimensionsInfo());
});
