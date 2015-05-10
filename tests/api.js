'use strict';

import chai from 'chai';
import Mock from './mocks';

let expect = chai.expect;

/** Functional tests */

let test = (title, callback) => {
    it(title, ( ) =>
        callback(Mock[title]()))
    ;
};

describe('::constructor', () => {
    test('toString', mock => {
        expect(mock)
            .to.equal('[object Polyfiller]');
    });

    test('pack (npm feature)', mock => {
        expect(/EventSource/.test(mock), 'source')
            .to.equal(true);
    });

    test('pack (default wrapper)', mock => {
        expect(/^;\(function \(\) {.*/.test(mock), 'source')
            .to.equal(true);
    });

    test('pack (custom wrapper)', mock => {
        expect(/^try { [\s\S]* } catch \(error\) {}$/.test(mock), 'source')
            .to.equal(true);
    });
});

describe('::find', ( ) => {
    let cases = [
        'find (npm feature)',
        'find (option.catalog)',
        'find (advanced format)'
    ];

    test('find (empty)', mock => {
        expect(mock.length)
            .to.equal(0);
    });

    cases.forEach(name => {
        test(name, mock => {
            let features = ['window.setImmediate', 'Promise'];

            expect(mock.length, 'length')
                .to.equal(2);

            expect('config' in mock[0], 'config')
                .to.equal(true);

            features.forEach((name, index) => {
                expect(mock[index].config.name, `name[${index}]`)
                    .to.equal(name);

                expect('source' in mock[index], 'source')
                    .to.equal(true);

                expect(new RegExp(name.replace(/.*\./, ''))
                    .test(mock[index].source), 'source.length').to.equal(true);
            });

            expect(mock[1].config.dependencies[0], 'dependencies')
                .to.equal('window.setImmediate');

            expect(/addFromSetImmediateArguments/.test(mock[0].source),
                'included feature').to.equal(true);
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

    test('find (callback)', mock => {
        let features = [ 'URL', 'EventSource' ];

        expect(mock.length, 'length')
            .to.equal(2);

        features.forEach((name, index) => {
            let callback = mock[index];

            expect(callback.name, 'name')
                .to.equal(name);

            expect(callback.bundle.source.search(name) !== -1, 'source')
                .to.equal(true);

            expect(callback.bundle.config.name == name, 'config')
                .to.equal(true);

            expect(callback.features.length, 'features')
                .to.equal(2);
        });
    });

    cases = [
        'find (npm + local)',
        'find (mixed format)'
    ];

    cases.forEach(name => {
        test(name, mock => {
            let features = ['EventSource', 'URL'];

            expect(mock.length > 1, 'length')
                .to.equal(true);

            features.forEach((name, index, list) => {
                expect(mock[index], 'config/source')
                    .to.have.all.keys(['config', 'source']);

                expect(new RegExp(list.join('|')).test(mock[index].source),
                    'source.length').to.equal(true);
            });
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

        expect(!/addFromSetImmediateArguments/.test(mock[0].source),
            'excluded feature').to.equal(true);
    });
});

describe('::list', () => {
    let cases = [
        'list (default)',
        'list (option.catalog)'
    ];

    cases.forEach((name) => {
        test(name, mock => {
            expect(mock.length > 1, 'length')
                .to.equal(true);

            expect(mock.indexOf('Promise') !== -1, 'name')
                .to.equal(true);
        });
    });

    test('list (extended)', mock => {
        mock.forEach(feature => {
            expect(feature.name.length > 1, 'name')
                .to.equal(true);
        });
    });

    test('list (option.exclude)', mock => {
        expect(mock.indexOf('Promise') === -1, 'name')
            .to.equal(true);
    });
});

describe('::pack', () => {
    test('pack (empty)', mock => {
        expect(mock.length, 'length')
            .to.equal(0);
    });

    test('pack (npm feature)', mock => {
        expect(/EventSource/.test(mock), 'source')
            .to.equal(true);
    });

    test('pack (default wrapper)', mock => {
        expect(/^;\(function \(\) {.*/.test(mock), 'source')
            .to.equal(true);
    });

    test('pack (custom wrapper)', mock => {
        expect(/^try { [\s\S]* } catch \(error\) {}$/.test(mock), 'source')
            .to.equal(true);
    });

    test('pack (verification)', mock => {
        mock.forEach(feature => {
            expect(feature.code.length > 1, feature.name)
                .to.equal(true);
        });
    });
});
