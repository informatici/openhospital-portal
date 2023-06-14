
    create table download (
       id bigint not null,
        details varchar(255),
        name varchar(255),
        size varchar(255),
        type varchar(255),
        url varchar(255),
        user_id bigint not null,
        primary key (id)
    ) engine=InnoDB;

    create table event_type (
       code varchar(2) not null,
        id bigint,
        name varchar(255),
        primary key (code)
    ) engine=InnoDB;

    create table hibernate_sequence (
       next_val bigint
    ) engine=InnoDB;

    insert into hibernate_sequence values ( 1 );

    create table hospital_event (
       id bigint not null,
        created datetime not null,
        date datetime not null,
        payload varchar(255),
        event_type_code varchar(2) not null,
        patient_id bigint not null,
        primary key (id)
    ) engine=InnoDB;

    create table patient (
       id bigint not null,
        address varchar(255),
        birth_date date not null,
        city varchar(255) not null,
        created datetime not null,
        first_name varchar(255) not null,
        hospital_id varchar(255) not null,
        next_kin varchar(255),
        note varchar(255),
        second_name varchar(255) not null,
        sex char(1) not null,
        telephone varchar(255) not null,
        user_id bigint not null,
        primary key (id)
    ) engine=InnoDB;

    create table patient_record (
       id bigint not null,
        created datetime not null,
        note varchar(255),
        option_value varchar(255),
        record_date datetime not null,
        value1 float not null,
        value2 float not null,
        patient_id bigint not null,
        record_type_code varchar(10) not null,
        primary key (id)
    ) engine=InnoDB;

    create table privilege (
       id bigint not null,
        name varchar(255) not null,
        primary key (id)
    ) engine=InnoDB;

    create table record_type (
       code varchar(10) not null,
        default_option_value varchar(255),
        default_value1 float not null,
        default_value2 float not null,
        id bigint,
        max_value float not null,
        measurement_type varchar(255) not null,
        measurement_value_type varchar(255) not null,
        min_value float not null,
        uom varchar(255),
        primary key (code)
    ) engine=InnoDB;

    create table role (
       id bigint not null auto_increment,
        name varchar(255) not null,
        primary key (id)
    ) engine=InnoDB;

    create table roles_privileges (
       role_id bigint not null,
        privilege_id bigint not null
    ) engine=InnoDB;

    create table secure_token (
       id bigint not null auto_increment,
        expire_at datetime not null,
        time_stamp datetime,
        token varchar(255),
        user_id bigint,
        primary key (id)
    ) engine=InnoDB;

    create table user (
       id bigint not null auto_increment,
        account_verified bit not null,
        active bit not null,
        created datetime not null,
        email varchar(255) not null,
        failed_login_attempts integer not null,
        is_using2fa bit not null,
        login_disabled bit not null,
        password varchar(255) not null,
        secret varchar(255),
        token varchar(255),
        username varchar(255) not null,
        primary key (id)
    ) engine=InnoDB;

    create table users_roles (
       user_id bigint not null,
        role_id bigint not null,
        primary key (user_id, role_id)
    ) engine=InnoDB;

    create table user_setting (
       id bigint not null,
        name varchar(255) not null,
        value varchar(255) not null,
        patient_id bigint not null,
        primary key (id)
    ) engine=InnoDB;

    create table verification_token (
       id bigint not null,
        expiry_date datetime,
        token varchar(255),
        user_id bigint not null,
        primary key (id)
    ) engine=InnoDB;

    alter table secure_token 
       add constraint UK_1vnojtqwxyii8kinnsohdknhw unique (token);

    alter table user 
       add constraint UK_ob8kqyqqgmefl0aco34akdtpe unique (email);

    alter table user 
       add constraint UK_sb8bbouer5wak8vyiiy4pf2bx unique (username);

    alter table download 
       add constraint FKo7cc91sofromqu0551ocgpn96 
       foreign key (user_id) 
       references user (id);

    alter table hospital_event 
       add constraint FK5yj1s86oe4dy7cw3ppu9dj7rv 
       foreign key (event_type_code) 
       references event_type (code);

    alter table hospital_event 
       add constraint FKq1xh8ge4nf6i1elt61d5ho52 
       foreign key (patient_id) 
       references patient (id);

    alter table patient 
       add constraint FKp6ttmfrxo2ejiunew4ov805uc 
       foreign key (user_id) 
       references user (id);

    alter table patient_record 
       add constraint FKn49dwqxnesthy865r5fipg06i 
       foreign key (patient_id) 
       references patient (id);

    alter table patient_record 
       add constraint FK656ujcdtv46r7homcp14a6nnb 
       foreign key (record_type_code) 
       references record_type (code);

    alter table roles_privileges 
       add constraint FK5yjwxw2gvfyu76j3rgqwo685u 
       foreign key (privilege_id) 
       references privilege (id);

    alter table roles_privileges 
       add constraint FK9h2vewsqh8luhfq71xokh4who 
       foreign key (role_id) 
       references role (id);

    alter table secure_token 
       add constraint FKdv1lktun3k4xuye9gb83xkv61 
       foreign key (user_id) 
       references user (id);

    alter table users_roles 
       add constraint FKt4v0rrweyk393bdgt107vdx0x 
       foreign key (role_id) 
       references role (id);

    alter table users_roles 
       add constraint FKgd3iendaoyh04b95ykqise6qh 
       foreign key (user_id) 
       references user (id);

    alter table user_setting 
       add constraint FK69lxr3ghe4bpgiekrhakw7ies 
       foreign key (patient_id) 
       references user (id);

    alter table verification_token 
       add constraint FK_VERIFY_USER 
       foreign key (user_id) 
       references user (id);
