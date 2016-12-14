/*
 * Copyright 2016 Anton Tananaev (anton@traccar.org)
 * Copyright 2016 Andrey Kunitsyn (andrey@traccar.org)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

Ext.define('Traccar.view.CalendarDialogController', {
    extend: 'Traccar.view.BaseEditDialogController',
    alias: 'controller.calendarDialog',

    onFileChange: function (fileField) {
        var reader;
        if (fileField.fileInputEl.dom.files.length > 0) {
            reader = new FileReader();
            reader.onload = function (event) {
                var b64String = btoa(String.fromCharCode.apply(null, new Uint8Array(event.target.result)));
                fileField.up('window').lookupReference('calendarDataField').setValue(b64String);
            };
            reader.onerror = function (event) {
                Traccar.app.showError(event.target.error);
            };
            reader.readAsArrayBuffer(fileField.fileInputEl.dom.files[0]);
        }
    }
});
