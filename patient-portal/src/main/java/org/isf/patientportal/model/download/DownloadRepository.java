package org.isf.patientportal.model.download;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface DownloadRepository extends CrudRepository<Download, Long> {
    
}
