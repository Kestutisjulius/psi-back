import React, { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <main className='form'>
            <Head title="Register" />
            <div className="square"></div>
            <h2>Login</h2>
            <div className="reg-form">

                <form onSubmit={submit}>
                    <div>
                        <span></span>
                        <TextInput
                            type="text"
                            name="email"
                            value={data.email}
                            className="form-input"
                            autoComplete="username"
                            placeholder="Name"
                            isFocused={true}
                            handleChange={onHandleChange}
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div>
                        <span></span>
                        <TextInput
                            type="password"
                            name="password"
                            value={data.password}
                            className="form-input"
                            placeholder="password"
                            autoComplete="current-password"
                            handleChange={onHandleChange}
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <label className="d-flex">
                            <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

                            <div>Remember me</div>
                        </label>
                    </div>

                    <div className="btn">
                        <PrimaryButton processing={processing}>
                            Log in
                        </PrimaryButton>
                    </div>
                    <div className="btn">
                        <p>Forgot your password?</p>
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                            >Send to email
                            </Link>
                        )}
                    </div>
                    <div className="btn">
                        <p>Dont have an account?</p>
                        <Link href={route('register')}>Register</Link>
                    </div>
                    <div className="btn">
                        <Link className="unbutton" href={route('main')}>Back to main page</Link>
                    </div>
                </form>
            </div>
        </main>
    );
}
