package com.example.server;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

import com.zaxxer.hikari.HikariDataSource;

@Configuration
@MapperScan(basePackages = "com.example.server.mapper", sqlSessionFactoryRef="sqlSessionFactory")
public class DatabaseConfig {

	@Bean(name = "dataSource")
    @ConfigurationProperties(prefix = "spring.datasource.hikari")  // application.properties 중 prefix 가 들어간 key들을 찾는다.
    public DataSource DataSource() {
		return new HikariDataSource();
    }

	@Bean(name = "sqlSessionFactory")
    public SqlSessionFactory sqlSessionFactory(
    		@Qualifier("dataSource") DataSource dataSource, 
    		ApplicationContext applicationContext) throws Exception {
    	
		SqlSessionFactoryBean sqlSessionFactory = new SqlSessionFactoryBean();
        sqlSessionFactory.setDataSource(dataSource);
        sqlSessionFactory.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("mapper/**/*.xml"));
        sqlSessionFactory.setTypeAliasesPackage("com.example.server");
        return sqlSessionFactory.getObject();
    }
	
    @Bean(name="sqlSession")
    public SqlSessionTemplate sqlSessionTemplate(SqlSessionFactory sqlSessionFactory) throws Exception {
        SqlSessionTemplate sqlSessionTemplate = new SqlSessionTemplate(sqlSessionFactory);
        // underscore를 camelCase로 매칭 : 예) user_id -> userId
        sqlSessionTemplate.getConfiguration().setMapUnderscoreToCamelCase(true);
        return sqlSessionTemplate;
    }
       
}