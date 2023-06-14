/*
 * Open Hospital (www.open-hospital.org)
 * Copyright © 2006-2023 Informatici Senza Frontiere (info@informaticisenzafrontiere.org)
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
package org.isf.patientportal.rest.api.recordtype.service;

import java.util.Optional;
import java.util.stream.Stream;

import org.isf.patientportal.model.recordtype.RecordType;
import org.isf.patientportal.model.recordtype.RecordTypeRepository;
import org.isf.patientportal.rest.api.recordtype.dto.RecordTypeDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service("recordTypeService")
public class RecordTypeService {

	@Autowired
    private final RecordTypeRepository recordTypeRepository;

    private final ModelMapper modelMapper = new ModelMapper();

    
    public RecordTypeService() {
		this.recordTypeRepository = null;
	}


	public RecordTypeService(RecordTypeRepository recordTypeRepository) {
		this.recordTypeRepository = recordTypeRepository;
	}
	
	
	/*public RecordType create(RecordTypeDto item) {
		RecordTypeDto copy = new RecordTypeDto(
				item.getId(),
                item.getCode(),
                item.getMeasurementValueType(),
                item.getMeasurementType(),
                item.getDefaultOptionValue(),
                item.getDefaultValue1(),
                item.getDefaultValue2(),
                item.getMinValue(),
                item.getMaxValue(),
                item.getUom()
        );
        return recordTypeRepository.save(modelMapper.map(copy, RecordType.class));
	}
	
	
	
    public Optional<RecordType> update(String recordTypeCode, RecordTypeDto newItem) {
        return recordTypeRepository.findByCode(recordTypeCode)
                .map(oldItem -> {RecordType updated = oldItem.updateWith(modelMapper.map(newItem, RecordType.class));
                   return recordTypeRepository.save(updated);
                });   
    }
    

    public void delete(RecordTypeDto recordTypeDto) {
    	recordTypeRepository.delete(modelMapper.map(recordTypeRepository.findByCode(recordTypeDto.getCode()), RecordType.class));  
	}
    
    
    public void deleteByCode(String recordTypeCode) {
    	recordTypeRepository.deleteByCode(recordTypeCode);
	}*/
	
    
    public Optional<RecordTypeDto> findByCode(String code) {
		return recordTypeRepository.findByCode(code)
			.map(recordType -> modelMapper.map(recordType, RecordTypeDto.class));
	}
	
    
    public Stream<RecordTypeDto> findAll() {
        return recordTypeRepository.findAll()
            .map(recordType -> modelMapper.map(recordType, RecordTypeDto.class))
            .get();
    }
    
}

