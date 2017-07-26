import React from 'react';
import { PropTypes as T } from 'prop-types';

import Form from '../../../components/Form';
import Button from '../../../components/Button';
import TextField from '../../../components/TextField';
import TextArea from '../../../components/TextArea';
// import { update, clear } from '../../../services/form';
import { isEmailValid, isPhoneValid } from '../../../services/form';
import './Pemesan.css';

export default function Pemesan(props) {
  const {
    name,
    user,
    storeId,
    action,
    set,
    clear,
  } = props;

  const isUserInvalid = (user) =>
    !user.name ||
    !isEmailValid(user.email) ||
    !isPhoneValid(user.phone) ||
    !user.city ||
    !user.address;

  const onChange = (field, value) => {
    // update(context, name, field, value);
    set(field, value);
  }

  const onReset = (field, value) => {
    // clear(context, name);
    clear();
  }

  const onSubmit = (e, storeId) => {
    e.preventDefault();
    action(storeId);
  }

  return (
    <Form
      name={name}
      title="Data Pemesan"
      icon={<i className="fa fa-lg fa-address-card" aria-hidden="true"></i>}
      onSubmit={(e) => onSubmit(e, storeId)}
      footer={
        <div>
          <Button
            className="Pemesan-footer-clear"
            type="reset"
            display="content"
            action={(e) => onReset(e)}
            icon="times"
            text="Bersihkan"
            disabled={!Object.keys(user).length}
            title={!Object.keys(user).length ? "Data sudah bersih" : "Bersihkan data"}
            isSecondary
            />
          <Button
            className="Pemesan-footer-done"
            type="submit"
            display="content"
            action={(e) => onSubmit(e, storeId)}
            icon="cart-arrow-down"
            text="Selesai"
            disabled={isUserInvalid(user)}
            title={isUserInvalid(user) ? "Masih ditemukan data yang tidak valid" : "Konfirmasi Pemesanan"}
            />
        </div>
      }
      >
      <TextField
        name="name"
        label="Nama"
        placeholder="Nama Lengkap"
        value={user.name}
        onChange={onChange}
        required
        />
      <TextField
        name="nickname"
        label="Panggilan"
        placeholder="Nama Panggilan"
        value={user.nickname}
        onChange={onChange}
        />
      <TextField
        type="email"
        name="email"
        label="Email"
        placeholder="Alamat Email"
        value={user.email}
        onChange={onChange}
        validate={isEmailValid}
        message="Alamat Email tidak valid"
        required
        />
      <TextField
        type="tel"
        display="content"
        name="phone"
        label="No. HP"
        placeholder="081234567890"
        value={user.phone}
        onChange={onChange}
        validate={isPhoneValid}
        message="No. HP tidak valid"
        required
        />
      <TextField
        type="text"
        name="city"
        label="Kota"
        placeholder="Kota Domisili"
        value={user.city}
        onChange={onChange}
        required
        />
      <TextArea
        name="address"
        label="Alamat"
        placeholder="Alamat Lengkap"
        value={user.address}
        rows={4}
        onChange={onChange}
        required
        />
      <TextArea
        name="notes"
        label="Catatan"
        placeholder="Catatan Tambahan"
        value={user.notes}
        onChange={onChange}
        />
    </Form>
  )
}

Pemesan.propTypes = {
  name: T.string.isRequired,
  user: T.object.isRequired,
  storeId: T.string.isRequired,
  action: T.func.isRequired,
  set: T.func.isRequired,
  clear: T.func.isRequired,
}
