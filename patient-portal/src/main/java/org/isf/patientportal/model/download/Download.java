/*
 * Open Hospital (www.open-hospital.org)
 * Copyright © 2006-2022 Informatici Senza Frontiere (info@informaticisenzafrontiere.org)
 *
 * Open Hospital is a free and open source software for healthcare data management.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * https://www.gnu.org/licenses/gpl-3.0-standalone.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */
package org.isf.patientportal.model.download;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.isf.patientportal.model.user.User;

import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
public class Download {
    @ManyToOne
    @JoinColumn(name="user_id", nullable=false)
    private User user;

    @Id
    @GeneratedValue
    private Long id;
    
    private String name;
    private String type;
    private String details;
    private String size;
    private String url;
    
    public Download() {
    }
    
    public Download(String name, String type, String size, String url, User user) {
        this.user = user;
        this.name = name;
        this.type = type;
        this.size = size;
        this.url = url;
    }
    
    
}
