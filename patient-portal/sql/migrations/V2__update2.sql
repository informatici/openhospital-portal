
    create table event_type (
       id bigint not null,
        code integer not null,
        name varchar(255),
        primary key (id)
    ) engine=InnoDB;

    create table hospital_event (
       id bigint not null,
        date datetime not null,
        payload varchar(255),
        event_type_id bigint not null,
        patient_id bigint not null,
        primary key (id)
    ) engine=InnoDB;

    create table patient_record (
       id bigint not null,
        created datetime not null,
        note varchar(255),
        option_value varchar(255),
        record_date datetime not null,
        value1 float,
        value2 float,
        patient_id bigint not null,
        record_type_id bigint not null,
        primary key (id)
    ) engine=InnoDB;

    create table record_type (
       id bigint not null,
        default_value float not null,
        description varchar(255),
        measurement_type varchar (255) not null,
        max_value float not null,
        measurement_value_type varchar (255) not null,
        min_value float not null,
        uom varchar(255) not null,
        primary key (id)
    ) engine=InnoDB;

    alter table hospital_event 
       add constraint FKbo1tf690u4003x669138kyofx 
       foreign key (event_type_id) 
       references event_type (id);

    alter table hospital_event 
       add constraint FKq1xh8ge4nf6i1elt61d5ho52 
       foreign key (patient_id) 
       references patient (id);

    alter table patient_record 
       add constraint FKn49dwqxnesthy865r5fipg06i 
       foreign key (patient_id) 
       references patient (id);

    alter table patient_record 
       add constraint FKsc63ue6ngv6bujkc3dad292df 
       foreign key (record_type_id) 
       references record_type (id);
