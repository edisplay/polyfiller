'use strict';

/** Browser tests */

let test = (title, callback) => {
    it(title, ( ) => {
        callback(Mock[title], source => {
            new Function (source)();
        });
    });
};

describe('::find', ( ) => {
    test('find (npm feature)', (mock, exec) => {
        window.Promise = null;

        let source = mock.map(feature => feature.source);
            source = source.join(';');

        exec(source);

        expect(window.Promise !== null && window.setImmediate !== null)
            .to.equal(true);
    });
});

describe('::pack', ( ) => {
    test('pack (npm feature)', (mock, exec) => {
        window.EventSource = null;

        exec(mock);

        expect(window.EventSource !== null)
            .to.equal(true);
    });
});
