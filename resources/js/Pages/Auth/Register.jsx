import React, { useEffect } from 'react';
import Dropdown from '@/Components/Dropdown';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Register({ roles }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: ''
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        // <GuestLayout>

        <main className='form'>
            <Head title="Register" />
            <div className="square"></div>
            <h2>Sign Up</h2>
            <div className="reg-form">
                <form onSubmit={submit}>

                    <div>
                        <span></span>
                        <TextInput
                            type="text"
                            name="name"
                            value={data.name}
                            className="form-input"
                            autoComplete="name"
                            isFocused={true}
                            handleChange={onHandleChange}
                            placeholder="Name"
                            required
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div>
                        <span></span>
                        <TextInput
                            type="email"
                            name="email"
                            value={data.email}
                            className="form-input"
                            autoComplete="username"
                            handleChange={onHandleChange}
                            placeholder="Email"
                            required
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div>
                        <span></span>
                        <div class="form-input">
                        <label for="role" >Choose role:</label>
                        <select name="role" id="role">
                            {
                                roles.map((role, i) => <option key={i} value={i}>{role}</option>)
                            }
                        </select>
                        </div>
                    </div>

                    <div>
                        <span></span>
                        <TextInput
                            type="password"
                            name="password"
                            value={data.password}
                            className="form-input"
                            autoComplete="new-password"
                            handleChange={onHandleChange}
                            placeholder="Password"
                            required
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div>
                        <span></span>
                        <TextInput
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="form-input"
                            handleChange={onHandleChange}
                            placeholder="Confirm Password"
                            required
                        />
                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>

                    <div className="btn">
                        <PrimaryButton processing={processing}>
                            Sign up
                        </PrimaryButton>

                        <div className="flex items-center justify-end mt-4">
                            Already have an account?
                            <Link href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
                                Login
                            </Link>

                        </div>
                    </div>
                </form>
                <div className="soc-icons">
                    <div className="or">or</div>
                    <p>Sign up with social platforms</p>
                    <div className="icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-google"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </main>
        // {/* </GuestLayout> */}
    );
}
