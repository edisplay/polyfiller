'use strict';

let test = (title, callback) => {
    it(title, () => {
        callback(Mock()[title]);
    });
};

describe('find', () => {
    let cases = ['find (npm feature)', 'find (option.catalog)'];

    test('find (empty)', mock => {
        expect(mock.length)
            .to.equal(0);
    });

    cases.forEach((name) => {
        test(name, mock => {
            let features = ['setImmediate', 'Promise'];

            expect(mock.length, 'length')
                .to.equal(2);

            expect('config' in mock[0], 'config')
                .to.equal(true);

            features.forEach((name, index) => {
                expect(mock[index].config.name, `name[${index}]`)
                    .to.equal(name);

                expect('source' in mock[index], 'source')
                    .to.equal(true);

                expect(new RegExp(name).test(mock[index].source), 'source.length')
                    .to.equal(true);
            });

            expect(mock[1].config.dependencies[0], 'dependencies')
                .to.equal('setImmediate');

            expect(/addFromSetImmediateArguments/.test(mock[0].source), 'included feature')
                .to.equal(true);
        });
    });

    test('find (local feature)', mock => {
        expect(mock.length, 'length')
            .to.equal(1);

        expect('config' in mock[0], 'config')
            .to.equal(true);

        expect(mock[0].config.name, 'name')
            .to.equal('URL');

        expect(mock[0].config.dependencies.length, 'dependencies')
            .to.equal(0);

        expect('source' in mock[0], 'source')
            .to.equal(true);

        expect(/URL/.test(mock[0].source), 'source.length')
            .to.equal(true);
    });

    test('find (npm + local)', mock => {
        let features = ['EventSource', 'URL'];

        expect(mock.length > 1, 'length')
            .to.equal(true);

        features.forEach((name, index, list) => {
            expect(mock[index], 'config/source')
                .to.have.all.keys(['config', 'source']);

            expect(new RegExp(list.join('|')).test(mock[index].source), 'source.length')
                .to.equal(true);
        });
    });

    test('find (option.exclude)', mock => {
        expect(mock.length, 'length')
            .to.equal(1);

        expect('config' in mock[0], 'config')
            .to.equal(true);

        expect(mock[0].config.name, 'name')
            .to.equal('Promise');

        expect('source' in mock[0], 'source')
            .to.equal(true);

        expect(/Promise/.test(mock[0].source), 'source.length')
            .to.equal(true);

        expect(!/addFromSetImmediateArguments/.test(mock[0].source), 'excluded feature')
            .to.equal(true);
    });
});
